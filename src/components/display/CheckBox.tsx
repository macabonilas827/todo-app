const CheckBox = () => {
  return (
    <div>
      <div>
        <img
          className="h-10"
          src="src/assets/images/icon-check.svg"
          alt="checkbox"
        />
      </div>
      <div className="round">
        <input type="checkbox" checked id="checkbox" />
        <label className="round" htmlFor="checkbox"></label>
      </div>
    </div>
  )
}
export default CheckBox
