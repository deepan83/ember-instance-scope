# Ember-instance-scope

Contains a mixin that allows definition of instance specific properties within extend (which adds to the prototype by default) through a custom instanceScope property

Useful for properties that wouldnt be passed to the component instances in the template directly but may still need to be instance specific. 

This can be done currently by setting these properties up in the init method but this provides a more declarative approach.

## Usage

<pre>
export default Ember.Component.extend(instanceScope,{
	title: "Mr", // Added to prototype
	instanceScope: { // Properties within this object this are made instance specific by the mixin
	  firstName: "Deepan",
	  lastName: "Aiyasamy",
	  testArray: [1,2,3],
	  testObj: {
	  	testObjArray: ["a","b","c"]
	  }
	},
	fullName: function(){
		return this.get("firstName") + " " + this.get("lastName")
	}.property("firstName", "lastName")
});
</pre>

Quick demo at http://development.instance-scope-demo.divshot.io/

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
