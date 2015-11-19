const chai = require( "chai" );
chai.use( require( "sinon-chai" ) );
chai.use( require( "chai-string" ) );
chai.use( require( "chai-properties" ) );
chai.use( require( "chai-as-promised" ) );
export const should = chai.should();
export const when = require( "when" );
export const _ = require( "lodash" );
export const sinon = require( "sinon" );
require( "sinon-as-promised" );
export const React = require( "react" );
export const ReactDOM = require( "react-dom" );
export const ReactUtils = require( "react-addons-test-utils" );
export const postal = require( "postal" );
export const lux = require( "lux.js" );

export function getMockReactComponent ( name ) {
	return React.createClass( {
		render() {
			return <div className={ `component-${name.toLowerCase()}` }> { name } { this.props.children }</div>;
		}
	} );
};
