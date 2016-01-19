import Ember from 'ember';

const{
  A
} = Ember;

export default Ember.Controller.extend({
  tableSortPropertiesMC: new A(['property:direction']),
  tableOptionsMC: new A([{
    contentPath: 'id',
    columnTitle: 'Id'
  },
  {
    contentPath: 'columnvalue',
    columnTitle: 'columntitle'
  },
  {
    contentPath: 'template',
    columnTitle: 'Ações',
    template: 'template-path',
    isSortable: false
  }
]),

  formDefinitionsMC: [{
      attribute: 'model.property',
      label: 'Label',
      type: 'type',
      validations:{
        presence: true,
        length: {minimum: 2}
      }
    }
  ]
});
