import 'core-js/stable'
import 'regenerator-runtime/runtime'

import '../sass/styles.scss'

import Ui from '../js/modules/ui';
import ApiCall from '../js/modules/apicall';

const ui = new Ui()
const apicall = new ApiCall()

apicall.getCatFact(fact)
.then(fact=>ui.updateUi(fact.text))
.catch(err => console.log(err));
