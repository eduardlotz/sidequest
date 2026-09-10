import {
  createContext,
  useContext,
  useRef,
  useState,
  type ReactElement,
  type ReactNode,
  type CSSProperties,
} from "react";
import { Drawer } from "vaul";
import { playSound } from "../../../lib/sound";
import {
  DESKTOP_VIEWPORT_QUERY,
  useMediaQuery,
} from "../../hooks/useMediaQuery";
import styles from "./ResponsiveDrawer.module.css";

const MOBILE_SNAP_POINTS = [0.78, 1];
const MOBILE_DEFAULT_SNAP_POINT = MOBILE_SNAP_POINTS[0];

function dismissPopoverFirst(event: KeyboardEvent) {
  const popover = document.querySelector<HTMLElement>("[popover]:popover-open");
  if (!popover) return;
  event.preventDefault();
  popover.hidePopover();
}

type Props = {
  children: ReactNode;
  desktopDirection: "left" | "right";
  mobileContainer: HTMLDivElement | null;
  trigger: ReactElement;
  variant: "about" | "profile";
};

type DrawerEnvironment = {
  desktop: boolean;
  desktopDirection: "left" | "right";
  mobileContainer: HTMLDivElement | null;
  depth: number;
  onNestedOpenChange?: (open: boolean) => void;
};

const DrawerEnvironmentContext = createContext<DrawerEnvironment | null>(null);

export function ResponsiveDrawer({
  children,
  desktopDirection,
  mobileContainer,
  trigger,
  variant,
}: Props) {
  const desktop = useMediaQuery(DESKTOP_VIEWPORT_QUERY);
  const [open, setOpen] = useState(false);
  const [nestedOpen, setNestedOpen] = useState(false);
  const [snapPoint, setSnapPoint] = useState<number | string | null>(
    MOBILE_DEFAULT_SNAP_POINT,
  );

  function changeOpen(nextOpen: boolean) {
    if (nextOpen === open) return;
    if (nextOpen && !desktop) setSnapPoint(MOBILE_DEFAULT_SNAP_POINT);
    if (!nextOpen) setNestedOpen(false);
    playSound(nextOpen ? "drawerOpen" : "drawerClose");
    setOpen(nextOpen);
  }

  return (
    <DrawerEnvironmentContext.Provider
      value={{
        desktop,
        desktopDirection,
        mobileContainer,
        depth: 0,
        onNestedOpenChange: setNestedOpen,
      }}
    >
      <Drawer.Root
        activeSnapPoint={desktop || nestedOpen ? undefined : snapPoint}
        setActiveSnapPoint={desktop || nestedOpen ? undefined : setSnapPoint}
        container={desktop ? undefined : mobileContainer}
        direction={desktop ? desktopDirection : "bottom"}
        open={open}
        onOpenChange={changeOpen}
        // Vaul's snap effect and nesting callbacks both write the same transform.
        // Suspend snapping while its child is open, then restore the saved snap.
        snapPoints={desktop || nestedOpen ? undefined : MOBILE_SNAP_POINTS}
        shouldScaleBackground={false}
      >
        <Drawer.Trigger asChild>{trigger}</Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay className={styles.drawerOverlay} />
          <Drawer.Content
            {...(!desktop && nestedOpen
              ? { "data-vaul-animate": "false" }
              : {})}
            onEscapeKeyDown={dismissPopoverFirst}
            className={styles.drawerContent}
            data-direction={desktop ? desktopDirection : "bottom"}
            data-drawer-variant={variant}
            data-mobile-snap={
              desktop ? undefined : snapPoint === 1 ? "full" : "default"
            }
          >
            {!desktop && <Drawer.Handle className={styles.drawerHandle} />}
            {children}
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </DrawerEnvironmentContext.Provider>
  );
}

export function ResponsiveNestedDrawer({
  children,
  trigger,
  variant = "profile",
  onOpenChange,
}: {
  children: ReactNode;
  trigger?: ReactElement;
  onOpenChange?: (open: boolean) => void;
  variant?: "about" | "profile";
}) {
  return (
    <ResponsiveNestedDrawerRoot onOpenChange={onOpenChange}>
      {trigger && <Drawer.Trigger asChild>{trigger}</Drawer.Trigger>}
      <ResponsiveNestedDrawerContent variant={variant}>
        {children}
      </ResponsiveNestedDrawerContent>
    </ResponsiveNestedDrawerRoot>
  );
}

// Keep triggers and close controls inside this root so Vaul owns the entire
// nesting lifecycle, including the parent transform and drag-to-dismiss.
export function ResponsiveNestedDrawerRoot({
  children,
  onOpenChange,
  onAnimationEnd,
}: {
  children: ReactNode;
  onOpenChange?: (open: boolean) => void;
  onAnimationEnd?: (open: boolean) => void;
}) {
  const environment = useContext(DrawerEnvironmentContext);
  const openRef = useRef(false);

  if (!environment) {
    throw new Error("ResponsiveNestedDrawer must be inside ResponsiveDrawer");
  }

  const { desktop, desktopDirection, mobileContainer } = environment;

  function changeOpen(nextOpen: boolean) {
    openRef.current = nextOpen;
    environment?.onNestedOpenChange?.(nextOpen);
    playSound(nextOpen ? "drawerOpen" : "drawerClose");
    onOpenChange?.(nextOpen);
  }

  return (
    <Drawer.NestedRoot
      container={desktop ? undefined : mobileContainer}
      direction={desktop ? desktopDirection : "bottom"}
      onOpenChange={changeOpen}
      onAnimationEnd={(open) => {
        if (open === openRef.current) onAnimationEnd?.(open);
      }}
    >
      <DrawerEnvironmentContext.Provider
        value={{
          desktop,
          desktopDirection,
          mobileContainer,
          depth: environment.depth + 1,
        }}
      >
        {children}
      </DrawerEnvironmentContext.Provider>
    </Drawer.NestedRoot>
  );
}

export function ResponsiveNestedDrawerContent({
  children,
  variant = "profile",
}: {
  children: ReactNode;
  variant?: "about" | "profile";
}) {
  const environment = useContext(DrawerEnvironmentContext);

  if (!environment) {
    throw new Error(
      "ResponsiveNestedDrawerContent must be inside ResponsiveDrawer",
    );
  }

  const { desktop, desktopDirection, depth } = environment;
  const layerStyle = { "--drawer-depth": depth } as CSSProperties;

  return (
    <Drawer.Portal>
      <Drawer.Overlay className={styles.drawerOverlay} style={layerStyle} />
      <Drawer.Content
        onEscapeKeyDown={dismissPopoverFirst}
        className={styles.drawerContent}
        style={layerStyle}
        data-direction={desktop ? desktopDirection : "bottom"}
        data-drawer-variant={variant}
        data-mobile-snap={desktop ? undefined : "full"}
      >
        {!desktop && <Drawer.Handle className={styles.drawerHandle} />}
        {children}
      </Drawer.Content>
    </Drawer.Portal>
  );
}

export function ResponsiveDrawerContainer({
  setContainer,
}: {
  setContainer: (container: HTMLDivElement | null) => void;
}) {
  return <div ref={setContainer} className={styles.mobileDrawerContainer} />;
}
