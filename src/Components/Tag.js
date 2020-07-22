import React from 'react' ;

export default function Tag ( { icons, children } ) {
    const iconsStyles = { margin: '0 .125em' } ;
    return (
        <div className="control">
            <div className={ `tags${  children ? ' has-addons' : ''}` }>
                <span className="tag is-medium is-info">
                    { icons && icons.map( ( icon, index ) => (
                        <i
                            key={ index }
                            className={ `fas ${icon.name}` }
                            style={ icons.length > 1 ?  { ...iconsStyles, ...icon.style } : icon.style }
                        >
                        </i>
                    ) ) }
                </span>
                { children && ( <span className="tag is-medium">{ children }</span> ) }
            </div>
        </div>
    ) ;
}
