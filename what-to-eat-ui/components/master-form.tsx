import React from "react";
import { useState } from "react";
import { Step1 } from "./step1";
import { Step2 } from "./step2";

export function MasterForm() {

    const [currentStep, setCurrentStep] = useState(1);
    const [form, setFormInput] = useState({ zipcode: "", category: ""});

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setFormInput({
            ...form,
            [name] : value
        })
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert(`Your registration detail: \n 
                 currentStep: ${currentStep} \n 
                 Zip Code: ${form.zipcode} \n
                 Category: ${form.category}`);
    }

    const _next = () => {
        setCurrentStep(currentStep >= 2 ? 3 : currentStep + 1)
    }

    const _prev = () => {
        setCurrentStep(currentStep <= 1 ? 1 : currentStep - 1)
    }

    /*
    * the functions for our button
    */
    const previousButton = () => {
        if (currentStep !== 1) {
            return (
                <button
                    className="btn btn-secondary"
                    type="button" onClick={_prev}>
                    Previous
                </button>
            )
        }
        return;
    }

    const nextButton = () => {
        if (form.zipcode.length == 5 && currentStep < 2){
            return (
                <button
                    className="btn btn-primary float-right"
                    type="button" onClick={_next}>
                    Next
                </button>
            )
        }
        return;
    }

    return (
        <React.Fragment>
            <p>Step {currentStep} </p>

            <form onSubmit={handleSubmit}>
                {/* render the form steps and pass required props in */}
                <Step1
                    currentStep={currentStep}
                    handleChange={handleChange}
                    zipcode={form.zipcode}
                />
                <Step2
                    currentStep={currentStep}
                    handleChange={handleChange}
                    category={form.category}
                />
                {previousButton()}
                {nextButton()}
            </form>
        </React.Fragment>
    );
}

