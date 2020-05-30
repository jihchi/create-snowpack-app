open Jest;
open Expect;
open ReactTestingLibrary;

test("renders learn react link", () => {
  render(<App />)
  |> getByText(~matcher=`Str("learn react"), ~options=?None)
  |> expect
  |> toMatchSnapshot
});
