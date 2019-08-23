import configureStore from '../../../store/configureStore';

describe('Store', () => {
  it('should set the supplied initial state', () => {
    const initialState = {
      locale: 'en-US',
      messages: {
        login: {
          placeholderEmail: 'E-mail',
          placeholderPassword: 'Password',
          emailError: 'E-mail is required.',
          passwordError: 'Password is required.',
          buttonLogin: 'Login'
        },
        sideBar: {
          menuSideBarClasses: 'Classes',
          menuSideBarHome: 'Home',
          menuSideBarSetup: 'Setup',
          menuSideBarStudents: 'Students',
          menuSideBarSubjects: 'Subjects'
        }
      }
    };
    const store = configureStore(initialState);
    expect(store.getState()).toEqual({
      locale: 'en-US',
      messages: {
        login: {
          placeholderEmail: 'E-mail',
          placeholderPassword: 'Password',
          emailError: 'E-mail is required.',
          passwordError: 'Password is required.',
          buttonLogin: 'Login'
        },
        sideBar: {
          menuSideBarClasses: 'Classes',
          menuSideBarHome: 'Home',
          menuSideBarSetup: 'Setup',
          menuSideBarStudents: 'Students',
          menuSideBarSubjects: 'Subjects'
        }
      }
    });
  });
});
