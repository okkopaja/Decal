import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type GroupType = {
  imageDimensions?: string;

  /** Style props */
  groupIconWidth?: CSSProperties["width"];
  groupIconHeight?: CSSProperties["height"];
  groupIconPosition?: CSSProperties["position"];
};

const Group: NextPage<GroupType> = ({
  imageDimensions,
  groupIconWidth,
  groupIconHeight,
  groupIconPosition,
}) => {
  const groupIconStyle: CSSProperties = useMemo(() => {
    return {
      width: groupIconWidth,
      height: groupIconHeight,
      position: groupIconPosition,
    };
  }, [groupIconWidth, groupIconHeight, groupIconPosition]);

  return (
    <img
      className="w-[285px] h-[285px]"
      alt=""
      src={imageDimensions}
      style={groupIconStyle}
    />
  );
};

export default Group;
