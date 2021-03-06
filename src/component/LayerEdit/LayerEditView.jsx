import React from 'react'
import PropTypes from 'prop-types'

import LayerEditGroup from './LayerEditGroup'
import modelPreference from '../../model/preference'

class LayerEditView extends React.Component {

	componentDidMount (){
		// set user preference to json
		modelPreference.actions.setIn({
			path: ['editMode'],
			value: 'editor',
		})
	}
	
	render (){
		const {error, layer, path, style} = this.props

		return (
			<div className="content-body">
				<LayerEditGroup 
					error={error}  
					group="root"
					layer={layer}
					open={false} 
					path={path} 
					style={style}
				/>
				<LayerEditGroup 
					error={error}  
					group="layout"
					layer={layer}
					open={true} 
					path={path} 
					style={style}
				/>
				<LayerEditGroup 
					error={error}
					group="paint"
					layer={layer}  
					open={true} 
					path={path} 
					style={style}
				/>
			</div>
		)
	}
}

LayerEditView.propTypes = {
	error: PropTypes.object,
	layer: PropTypes.object,
	path: PropTypes.array,
	style: PropTypes.object,
}

export default LayerEditView