export default function Step1(props: any){
    if (props.currentStep !== 1) {
        return null
      } 
      return(
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            className="form-control"
            id="location"
            name="location"
            type="text"
            placeholder="Enter zip code or city, state"
            value={props.location}
            onChange={props.handleChange}
            />
        </div>
      );
}