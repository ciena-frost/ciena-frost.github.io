export default function() {
	this.get('/links/:id', function(db, request) {
		let id = request.params.id;

		return {
			data: {
				type: 'links',
				id: id,
				attributes: db.links.find(id)
			}
		};
	});

	this.pretender.get('/assets/*passthrough', this.pretender.passthrough);
}
