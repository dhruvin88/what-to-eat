import React from "react";
import { useState } from "react";
import {useRouter} from 'next/router'
import Step1 from "./step1";
import Step2 from "./step2";

export default function MasterForm() {
    const [currentStep, setCurrentStep] = useState(1);
    const [form, setFormInput] = useState({ location: "", category: ""});
    const router = useRouter()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setFormInput({
            ...form,
            [name] : value
        })
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        router.push({
            pathname: '/yum-food',
            query: {location: encodeURIComponent(form.location), category: encodeURIComponent(form.category.toLowerCase())},
        })
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
        if (form.location.length == 5 && currentStep < 2){
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
                    location={form.location}
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

