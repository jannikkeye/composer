import { useState, useCallback, useEffect } from "react";
import { loadAssets } from "../lib/loadAssets";

export const useStaticAssets = ({ js, css }: { js: string; css?: string }) => {
  const [loadAttempts, setLoadAttempts] = useState(1);
  const [loadingAssets, setLoadingAssets] = useState(false);
  const [assetLoadingError, setAssetLoadingError] = useState(false);
  const handleTryAgain = useCallback(() => {
    setLoadAttempts(loadAttempts + 1);
  }, [setLoadAttempts, loadAttempts]);

  /**
   * Load & possibly attempt to reload assets.
   */
  useEffect(() => {
    setLoadingAssets(true);
    loadAssets({ js, css })
      .then(() => {
        return setLoadingAssets(false);
      })
      .catch(() => {
        setLoadingAssets(false);
        setAssetLoadingError(true);
      });
  }, [js, css, loadAttempts]);

  return {
    loading: loadingAssets,
    attempts: loadAttempts,
    error: assetLoadingError,
    retry: handleTryAgain,
  };
};
