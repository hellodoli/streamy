import React from 'react';
import ContentLoader, { Facebook } from 'react-content-loader';

/*
  - type
    - 1: ContentLoader
    - 2: Facebook
*/
function renderContentLoaderType ({ type, mode, width = 400, height = 200, children, ...props }) {
  const secondaryColor = '#ecebeb';
  let primaryColor = '#f3f3f3';
  if (mode === 'dark') {
    primaryColor = '#343a40';
  }

  switch (parseInt(type, 10)) {
    case 1: // Facebook Loader
      return (
        <Facebook 
          width={width}
          height={height}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          {...props}
        />
      );
    case 2: // Custom Loader
    default:
      return (
        <ContentLoader
          width={width}
          height={height}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          {...props}
        >
          { children }
        </ContentLoader>
      );
    case 3: // News Loader
      {
        const w = 100;
        const h = (height*80)/100;
        const rx = (height / 2) - (h / 2);
        return (
          <ContentLoader
            width={width}
            height={height}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            {...props}
          >
            <rect x={rx} y="50" rx="3" ry="3" width={w} height={h} />
          </ContentLoader>
        );
      }
  }
}

const ContentLoading= (props) => {
  return(
    <div className="s-content-loader">
      { renderContentLoaderType(props) }
    </div>
  );
}

export default ContentLoading;