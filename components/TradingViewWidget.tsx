"use client";

import useTradingViewWidget from "@/hooks/useTradingViewWidget";
import { cn } from "@/lib/utils";
import React, { useRef, memo } from "react";

interface TradingViewWidgetProps {
  title?: string;
  scriptUrl: string;
  config: Record<string, unknown>;
  height?: number;
  className?: string;
}

const TradingViewWidget = ({
  title,
  scriptUrl,
  config,
  height = 600,
  className,
}: TradingViewWidgetProps) => {
  const containerRef = useTradingViewWidget(scriptUrl, config, height);

  return (
    <div className="w-full">
      {title && (
        <h3 className="mb-5 text-2xl font-semibold text-gray-100">{title}</h3>
      )}
      <div
        className={cn("tradingview-widget-container", className)}
        ref={containerRef}
      >
        <div
          className="tradingview-widget-container__widget"
        ></div>
        <div className="tradingview-widget-copyright">
          <a
            href="https://vn.tradingview.com/symbols/NASDAQ-AAPL/"
            rel="noopener nofollow"
            target="_blank"
          >
            <span className="blue-text">Track all markets on TradingView</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default memo(TradingViewWidget);
