$(() => {
	$('#btn').click(() => {
		let name = $('#name').val();
		let id = $('#id').val();
		console.log('Hello', name, id);
		$.post(
			'/hi',
			{
				name,
				id
			},
			() => {
				console.log('done');
			}
		);
	});
});
