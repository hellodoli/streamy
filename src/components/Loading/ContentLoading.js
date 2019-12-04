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

    row = 4,
    col = 1,

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
      const arrTextRow = [];
      const totalTextRow = 4;
      for (let i = 0; i < totalTextRow; i+=1) {
        arrTextRow.push(i+1);
      }
        
      width = 400;
      const fullGapEachRow = gap * (col - 1);
      const singleWidth = (width - fullGapEachRow) / col;
      const itemWidth = (singleWidth*20) / 100; // itemWidth = 20% singleWidth
      const singleHeight = itemWidth + (2*gap);
      height = singleHeight * row;

      const itemTextRowWidth = singleWidth - itemWidth - gap;
      const itemTextRowHeight = (0.9*(itemWidth/totalTextRow));
      const itemTextRowGap = 0.1/(totalTextRow - 1)*itemWidth;
      
      const list = [];
      for (let i = 0; i < row; i+=1) {
        const y = (singleHeight * i) + gap;
        for (let j = 0; j < col; j+=1) {
          const x = (singleWidth + gap) * j;
          const x1 = x + itemWidth + gap;
          list.push(
            <React.Fragment key={`${i}${j}`}>
              <rect x={x} y={y} rx={b} ry={b} width={itemWidth} height={itemWidth} />
              { arrTextRow.map((item,index) => {
                const w1 = (index % 2 === 0) ? itemTextRowWidth : (itemTextRowWidth / 2);
                const y1 = y + ((itemTextRowHeight + itemTextRowGap) * index);
                return ( <rect key={`${i}${j}${index}`} x={x1} y={y1} rx={b} ry={b} width={w1} height={itemTextRowHeight} /> );
              })}
            </React.Fragment>
          );
        }
      }

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