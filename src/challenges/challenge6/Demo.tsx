import React, { useRef, useState } from "react";
import "./Demo.css";

const patternMismatchText = 'value does not match the specified pattern'
const rangeOverflowText = 'value is greater than the maximum specified'
const rangeUnderflowText = ' value is less than the minimum specified'
const stepMismatchText = 'value does not fit the rules determined by the step attribute'
const tooLongText = 'value exceeds the specified maxlength'
const tooShortText = 'value fails to meet the specified minlength'
const typeMismatchText = 'value is not in the required syntax (when type is email or url)'
const valueMissingText = 'value that is true if the element has a required attribute'
const defaultInputText = ''

export default function Demo() {
    const formRef = useRef(null)
    const [form, setForm] = useState({
        FirstName: "",
        LastName: "",
        Email: "",
        Mobile: "",
        Title: "",
        isTrue: "false",
        List: "",
        Date: "",
        Area: ""
    });
    const [msg, setMsg] = useState({
        FirstName: "",
        LastName: "",
        Email: "",
        Mobile: "",
        Title: "",
        isTrue: "false",
        List: "",
        Date: "",
        Area: ""
    })

    const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert(JSON.stringify(form));
    };

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        validateInput(e.target)
        const { name, value } = e.target;
        setForm(form => {
            return {
                ...form,
                [name]: value
            };
        });
    };

    const validateInput = (e: HTMLInputElement) => {
        const isValidInput = e.checkValidity()
        e.classList.remove('errorFinal')
        e.classList.remove('correctFinal')
        if (isValidInput) {
            e.classList.remove('error')
            e.classList.add('correct')
        } else {
            e.classList.remove('correct')
            e.classList.add('error')
        }
    }

    const validateInput2 = (e: HTMLInputElement) => {
        if (!e.checkValidity) return
        const isValidInput = e.checkValidity()
        if (isValidInput) {
            e.classList.remove('errorFinal')
            e.classList.add('correctFinal')
        } else {
            e.classList.remove('correctFinal')
            e.classList.add('errorFinal')
        }
    }

    const setCustomMsg = (input: HTMLInputElement) => {
        const validityState = input.validity;

        if (validityState.patternMismatch) {
            input.setCustomValidity(patternMismatchText);
        } else if (validityState.rangeOverflow) {
            input.setCustomValidity(rangeOverflowText);
        } else if (validityState.rangeUnderflow) {
            input.setCustomValidity(rangeUnderflowText);
        } else if (validityState.stepMismatch) {
            input.setCustomValidity(stepMismatchText);
        } else if (validityState.tooLong) {
            input.setCustomValidity(tooLongText);
        } else if (validityState.tooShort) {
            input.setCustomValidity(tooShortText);
        } else if (validityState.typeMismatch) {
            input.setCustomValidity(typeMismatchText);
        } else if (validityState.valueMissing) {
            input.setCustomValidity(valueMissingText);
        } else {
            input.setCustomValidity(defaultInputText);
        }

        input.reportValidity();
    }

    const validateForm = () => {
        const formElement:HTMLInputElement = formRef.current!
        if (formElement !== null) {
            const inputs = Array.from(formElement.children)
            const updateTexts = {}
            for (const input of inputs) {
                const a = input as HTMLInputElement
                validateInput2(a)
                if (a.name) {
                    // setCustomMsg(input)
                    updateTexts[a.name] = a.validationMessage
                }
            }
            setMsg({ ...updateTexts })
        }

    }

    return (
        <div className="form">
            <h1>Form</h1>
            <form onSubmit={(e) => formHandler(e)} ref={formRef}>
                <input
                    type="text"
                    placeholder="First name"
                    name="FirstName"
                    onChange={e => inputHandler(e)}
                    value={form.FirstName}
                    maxLength={10}
                    minLength={3}
                    required
                />
                <p className="errorMsg">{msg.FirstName}</p>
                <input
                    type="text"
                    placeholder="Last name"
                    name="LastName"
                    onChange={e => inputHandler(e)}
                    value={form.LastName}
                    maxLength={5}
                    required
                />
                <p className="errorMsg">{msg.LastName}</p>
                <input
                    type="email"
                    placeholder="Email"
                    name="Email"
                    onChange={inputHandler}
                    value={form.Email}
                    required
                />
                <p className="errorMsg">{msg.Email}</p>
                <input
                    type="number"
                    placeholder="Mobile number"
                    name="Mobile"
                    onChange={inputHandler}
                    value={form.Mobile}
                    minLength={6}
                    maxLength={10}
                    required
                />
                <p className="errorMsg">{msg.Mobile}</p>
                <input
                    type="date"
                    name="Date"
                    onChange={inputHandler}
                    value={form.Date}
                    required
                />
                <p className="errorMsg">{msg.Date}</p>
                <textarea
                    name="Area"
                    placeholder="Introduce description..."
                    onChange={e => inputHandler(e)}
                    value={form.Area}
                    rows={4}
                    cols={50}
                    required
                />
                <p className="errorMsg">{msg.Area}</p>
                <select name="Title" onChange={e => inputHandler(e)} value={form.Title} required>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Miss">Miss</option>
                    <option value="Dr">Dr</option>
                </select>
                <div className="radio">
                    <p>RADIO TYPE</p>
                    <div>
                        <input
                            name="isTrue"
                            type="radio"
                            onChange={inputHandler}
                            value="true"
                            checked={form.isTrue === "true"}
                        />
                        <label htmlFor="male">True</label>
                    </div>
                    <div>
                        <input
                            name="isTrue"
                            type="radio"
                            onChange={inputHandler}
                            value="false"
                            checked={form.isTrue === "false"}
                        />
                        <label htmlFor="male">False</label>
                    </div>
                </div>
                <div className="radio">
                    <p>CHECKBOX TYPE</p>
                    <div>
                        <input
                            name="List"
                            type="checkbox"
                            onChange={inputHandler}
                            value={form.List}
                            required
                        />
                        <label htmlFor="male">True</label>
                    </div>
                    <div>
                        <input
                            name="List"
                            type="checkbox"
                            onChange={inputHandler}
                            value={form.List}
                            required
                        />
                        <label htmlFor="male">True</label>
                    </div>
                </div>
                <button type="submit" className="submit-button" onClick={validateForm}>Submit</button>
            </form>
        </div>
    );
}