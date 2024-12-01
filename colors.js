//------------ it contains all colors related html code

const allColors = `<div style="display: flex; flex-direction: column;  gap: 10px; width: 50%; padding:0px 0px 20px 20px;">

        <div style="width:60%; display:flex; justify-content:space-around; "><span>Size</span> <span>Colour</span></div>
        <div style="display: flex; gap: 10px;" class="colorChildDiv">
            <p>#1</p>
            <div>
                <select name="sizes" id="">
                    <option value="NA">SIZE</option>
                    <option value="SMALL">S</option>
                    <option value="MEDIUM">M</option>
                    <option value="LARGE">L</option>
                </select>
            </div>


            <div>
                <select name="sizes" id="">
                    <option value="NA">COLOUR</option>
                    <option value="BLACK">BLACK</option>
                    <option value="RED">RED</option>
                    <option value="GREEN">GREEN</option>
                </select>
            </div>

        </div>

        <div style="display: flex; gap: 10px;" class="colorChildDiv">
            <p>#2</p>
            <div>
                <select name="sizes" id="">
                    <option value="NA">SIZE</option>
                    <option value="SMALL">S</option>
                    <option value="MEDIUM">M</option>
                    <option value="LARGE">L</option>
                </select>
            </div>


            <div>
                <select name="sizes" id="">
                    <option value="NA">COLOUR</option>
                    <option value="BLACK">BLACK</option>
                    <option value="RED">RED</option>
                    <option value="GREEN">GREEN</option>
                </select>
            </div>

        </div>

    </div>`;

export default allColors;
