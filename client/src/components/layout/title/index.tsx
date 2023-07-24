import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";

import { moneymapSmall, moneymaptitle} from "assets"

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
          <img src={moneymapSmall} alt="M" width="28px" />
        ) : (
          <img src={moneymaptitle} alt="MoneyMap" width="140px"/>
        )}
      </Link>
    </Button>
  );
};
