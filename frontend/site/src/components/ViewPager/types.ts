import React from "react";

export type ViewPagerProps = {
  onChange: (current: number) => void
  pages: React.ReactElement[]
}