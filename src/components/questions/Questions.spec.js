/*==================== EXTERNAL MODULES ====================*/
import Enzyme, {configure, mount} from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';


/*==================== INTERNAL MODULES ====================*/
import Questions from './Questions.jsx';

test('Questions should exist', () => {
  expect(Questions).toBe(Questions)
});


/* --------- Issues with Enzyme depreciation  --------- */
// configure({adapter: new Adapter()})

// describe('<Questions />', () => {
//   it('calles componentDidMount', () => {
//     jest.spyOn(Questions.prototype, 'componentDidMount');
//     mount(<Questions />);

//     expect(Questions.prototype.componentDidMount).to.have.property('callCount', 1);
//   });
// });
