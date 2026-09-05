import {
  createContext,
  useContext,
  useState,
  type ReactElement,
  type ReactNode,
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
  const [snapPoint, setSnapPoint] = useState<number | string | null>(
    MOBILE_DEFAULT_SNAP_POINT,
  );

  function changeOpen(nextOpen: boolean) {
    if (nextOpen === open) return;
    if (nextOpen && !desktop) setSnapPoint(MOBILE_DEFAULT_SNAP_POINT);
    playSound(nextOpen ? "drawerOpen" : "drawerClose");
    setOpen(nextOpen);
  }

  return (
    <DrawerEnvironmentContext.Provider
      value={{ desktop, desktopDirection, mobileContainer }}
    >
      <Drawer.Root
        activeSnapPoint={desktop ? undefined : snapPoint}
        setActiveSnapPoint={desktop ? undefined : setSnapPoint}
        container={desktop ? undefined : mobileContainer}
        direction={desktop ? desktopDirection : "bottom"}
        open={open}
        onOpenChange={changeOpen}
        snapPoints={desktop ? undefined : MOBILE_SNAP_POINTS}
        shouldScaleBackground={false}
      >
        <Drawer.Trigger asChild>{trigger}</Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay className={styles.drawerOverlay} />
          <Drawer.Content
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
}: {
  children: ReactNode;
  trigger: ReactElement;
}) {
  const environment = useContext(DrawerEnvironmentContext);
  const [open, setOpen] = useState(false);

  if (!environment) {
    throw new Error("ResponsiveNestedDrawer must be inside ResponsiveDrawer");
  }

  const { desktop, desktopDirection, mobileContainer } = environment;

  function changeOpen(nextOpen: boolean) {
    if (nextOpen === open) return;
    playSound(nextOpen ? "drawerOpen" : "drawerClose");
    setOpen(nextOpen);
  }

  return (
    <Drawer.NestedRoot
      activeSnapPoint={desktop ? undefined : 1}
      container={desktop ? undefined : mobileContainer}
      direction={desktop ? desktopDirection : "bottom"}
      open={open}
      onOpenChange={changeOpen}
      snapPoints={desktop ? undefined : [1]}
    >
      <Drawer.Trigger asChild>{trigger}</Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className={styles.drawerOverlay} />
        <Drawer.Content
          className={styles.drawerContent}
          data-direction={desktop ? desktopDirection : "bottom"}
          data-drawer-variant="profile"
          data-mobile-snap={desktop ? undefined : "full"}
        >
          {!desktop && <Drawer.Handle className={styles.drawerHandle} />}
          {children}
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.NestedRoot>
  );
}

export function ResponsiveDrawerContainer({
  setContainer,
}: {
  setContainer: (container: HTMLDivElement | null) => void;
}) {
  return <div ref={setContainer} className={styles.mobileDrawerContainer} />;
}
