import React from 'react'
import PropTypes from 'prop-types'

import Field from '../Field'

import modelStyle from '../../model/style'

class PropertyBool extends React.Component {

	handleChange = async ({value})=>{
		const {handle, name, path} = this.props
		let val = value
		if (value === 'true') val = true
		if (value === 'false') val = false
		if (handle && handle.change) return handle.change({name, path, value: val})
		await modelStyle.actions.setIn({
			path,
			value: val,
		})
	}

	render (){
		const {autoFocus, error, name, path, value} = this.props

		const options = [
			{name:'true',value:true},
			{name:'false',value:false}
		]

		const handle = {
			change: this.handleChange
		}

		return <div className="form-group mb-0">
			<Field 
				autoFocus={autoFocus}
				error={error}
				handle={handle} 
				name={name}
				options={options}
				path={path}
				type={'select'}
				value={value}
			/>
		</div>
	}
}

PropertyBool.propTypes = {
	autoFocus: PropTypes.bool,
	error: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	]),
	handle: PropTypes.shape({
		change: PropTypes.func,
	}),
	name: PropTypes.string.isRequired,
	path: PropTypes.array,
	type: PropTypes.string, // enum, point
	value: PropTypes.any,
	valueDefault: PropTypes.any,
}

export default PropertyBool