import React from 'react';
import ContentLoader, { Facebook } from 'react-content-loader';

/*
  - type
    - 1: Facebook
    - 2: Custom Loader
    - 3: News
*/
function renderContentLoaderType (
  { 
    type,
    mode,
    width = 400,
    height = 200,

    row = 1,
    col = 5,

    children,
    ...props
  }) {
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
        // default
        const b = 3; // border radius
        const gap = 20;
        const totalTextRow = 4;

        const itemWidth = 60;
        const singleHeight = itemWidth + (2*gap);
        height = singleHeight * row;
        width = 400;
        const fullGapEachRow = gap * (col - 1);
        const singleWidth = (width - fullGapEachRow) / col;
        
        // square
        //const h = (singleHeight * 60) / 100;
        //const y = (singleHeight - h) / 2;
        // row text
        //const x1 = x + h + gap;
        //const w1 = width - gap - h;
        //const w2 = w1 / 2;
        //const h1 = 20;

        const list = [];
        for (let i = 0; i < row; i++ ) {
          for (let j = 0; j < col; j++) {
            const x = (singleWidth + gap) * j;

            list.push(
              <React.Fragment>
                <rect x={x} y={20} rx={b} ry={b} width={itemWidth} height={itemWidth} />
              </React.Fragment>
            );
          }
        }

        console.log('list: ', list);

        return (
          <ContentLoader
            width={width}
            height={height}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            {...props}
          >
            { list }
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