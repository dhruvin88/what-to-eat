export function Step1(props: any){
    if (props.currentStep !== 1) {
        return null
      } 
      return(
        <div className="form-group">
          <label htmlFor="zipcode">Zip Code</label>
          <input
            className="form-control"
            id="zipcode"
            name="zipcode"
            type="text"
            placeholder="Enter zip code"
            value={props.zipcode}
            onChange={props.handleChange}
            />
        </div>
      );
}