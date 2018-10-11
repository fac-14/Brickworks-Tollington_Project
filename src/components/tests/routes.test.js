// test('invalid path should redirect to 404', () => {
//     const wrapper = mount(
//       <MemoryRouter initialEntries={[ '/random' ]}>
//         <App/>
//       </MemoryRouter>
//     );
//     expect(wrapper.find(LandingPage)).toHaveLength(0);
//     expect(wrapper.find(NotFoundPage)).toHaveLength(1);
//   });