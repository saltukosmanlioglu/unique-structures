declare module "fslightbox-react" {
    import * as React from "react";
  
    interface FsLightboxProps {
      toggler: boolean;
      sources: string[];
      types?: string[];
      slide?: number;
    }
  
    const FsLightbox: React.FC<FsLightboxProps>;
  
    export default FsLightbox;
  }
  