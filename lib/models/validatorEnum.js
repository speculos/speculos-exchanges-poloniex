'use strict';

const lib = {
	deps:{
		joi:require('joi'),
		Enum:require('enum')
	}
};

let validatorEnum = lib.deps.joi.extend({
	base:lib.deps.joi.any(),
	name:'enum',
	language:{
		schema:'needs to be a valid enumeration value'
	},
	rules:[
		{
			name:'schema',
			params:{
				schema:lib.deps.joi.object().options({convert:false}).type(lib.deps.Enum)
			},
			validate:function(p_params, p_value, p_state, p_options) {
				let enumValue = p_params.schema.get(p_value);
				if(!enumValue) {
					return this.createError('enum.schema', {}, p_state, p_options);
				}

				return enumValue;
			}
		}
	]
});

module.exports = validatorEnum;