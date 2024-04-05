import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Prueba en AddCategory", () => {
  test("Debe de cambiar el valor de la caja de texto", () => {
    render(<AddCategory onAddCategory={() => {}} />);
    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: "Saitama" } });

    expect(input.value).toBe("Saitama");
  });

  test("Debe de llamar onAddCategory si el input tiene un valor", () => {
    const inputValue = "Saitama";
    const onAddCategory = jest.fn();

    render(<AddCategory onAddCategory={onAddCategory} />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    // screen.debug()
    expect(input.value).toBe("");

    expect(onAddCategory).toHaveBeenCalled();
    expect(onAddCategory).toHaveBeenCalledTimes(1);
    expect(onAddCategory).toHaveBeenCalledWith(inputValue);
  });

  test("No debe llamar el onAddCategory si el input esta vacio", () => {
    const onAddCategory = jest.fn();

    render(<AddCategory onAddCategory={onAddCategory} />);
    const form = screen.getByRole("form");
    // screen.debug()

    fireEvent.submit(form);

    expect(onAddCategory).toHaveBeenCalledTimes(0);
    expect(onAddCategory).not.toHaveBeenCalled();
  });
});
