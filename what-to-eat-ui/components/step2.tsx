import React from "react";
import { Button } from "react-bootstrap";

export default function Step2(props: any) {
  if (props.currentStep !== 2) {
    return null;
  }
  return (
    <div className="form-group">
      <label htmlFor="category">Category</label>
      <input
        className="form-control"
        id="category"
        name="category"
        type="text"
        placeholder="Enter Category (Optional)"
        value={props.category}
        onChange={props.handleChange}
      />
      <div className="text-center">
        <Button className="btn btn-success btn-block" type="submit">Pick Resturant</Button>
      </div>
    </div>
  );
}
