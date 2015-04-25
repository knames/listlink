'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * List Schema
 */
var ListSchema = new Schema({
	updated: {
		type: Date,
		default: Date.now
	},
	content: {
		type: String,
		default: '',
		trim: true,
		required: 'content cannot be blank'
	},
	boxtype:{
		type: String,
		default: '',
		trim: true
	},
	isSubList: Boolean,
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	access: {
	type: [String],
	default: 'User',
	required: 'enter any other users'
	},
	children: {
		type: [Scheme.ObjectId],
		ref: 'List'
	}
});

mongoose.model('List', ListSchema);
