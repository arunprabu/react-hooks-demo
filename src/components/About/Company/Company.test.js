import React from 'react'; // needed
import ReactDOM from 'react-dom'; //needed
import Company from './Company';
import { render, cleanup, fireEvent } from '@testing-library/react'; // from react testing lib 
import renderer from 'react-test-renderer';

afterEach(cleanup); // we can cleanup the tests using after each

// group of related tests -- test cases
describe('company component', () => {

  it('renders the company comp properly', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Company/>, div);
  });

  it('should display the prop correctly', () => {
    // take the element to put under test
    const { getByTestId } = render( <Company companyName='Facebook'></Company>);
    // fetching the element by companyEl; // refer Company.js 
    // checking if props are received correctly
    expect(getByTestId('companyEl')).toHaveTextContent('Facebook');// companyEl is the test id of the element
  });

  it('should have the right placeholder in input', () => {
    const { queryByPlaceholderText } = render(<Company />);

    //if the placeholder is not matching, it will fail
    expect(queryByPlaceholderText('company')).toBeTruthy();
  });

  //checking whether the comp has right text
  it('should have official webpage text', () => {
    const { getByText } = render(<Company />);
    const linkElement = getByText('Welcome to My Company\'s Official Webpage!');
    expect(linkElement).toBeInTheDocument();
  });

  //now let's check if the input element works well with onChange event
  it('should update onChange event in Fav company input', () => {
    // taking the comp to put under test
    const { queryByPlaceholderText} = render(<Company />);
    // finding the element with a placeholder
    const favCompanyInput = queryByPlaceholderText('Fav Company');
    // now checking if onchange is working right or not
    //mock firing change event with the value 
    fireEvent.change(favCompanyInput, {target: {value: 'test'}});
    // finally checking if the input element is showing the right update
    expect(favCompanyInput.value).toBe('test');
  });

  //finally let's focus on snapshot testing
  it('should have right company comp snapshot', () => {
    const tree = renderer.create(<Company name='Facebook'></Company>).toJSON();
    console.log(tree);
    expect(tree).toMatchSnapshot();
  });
  
});



