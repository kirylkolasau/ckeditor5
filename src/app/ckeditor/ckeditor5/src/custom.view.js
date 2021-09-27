import View from '@ckeditor/ckeditor5-ui/src/view';

class SampleView extends View {
	constructor( locale ) {
		super( locale );

		const bind = this.bindTemplate;

		// Views define their interface (state) using observable attributes.
		this.set( 'elementClass', 'bar' );

		this.setTemplate( {
			tag: 'p',

			// The element of the view can be defined with its children.
			children: [
				'Hello',
				{
					tag: 'b',
					children: [ 'world!' ]
				}
			],
			attributes: {
				class: [
					'foo',

					// Observable attributes control the state of the view in DOM.
					bind.to( 'elementClass' )
				]
			},
			on: {
				// Views listen to DOM events and propagate them.
				click: bind.to( 'clicked' )
			}
		} );
	}
}
