import index from "../index";

it('renders without crashing', () => {
    expect(
      JSON.stringify(
        Object.assign({}, index, { _reactInternalInstance: 'censored' }),
      ),
    ).toMatchSnapshot();
  });