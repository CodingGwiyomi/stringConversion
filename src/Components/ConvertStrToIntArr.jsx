import React, { useState } from "react";

const ConvertStrToIntArr = () => {
  const [inputString, setInputString] = useState("");

  const onSendClicked = (e) => {
    e.preventDefault();
    var arrayOfInt = inputString.split(",").map(Number);

    console.log(arrayOfInt);

    console.log(
      "Number of elements: " + findLength(arrayOfInt),
      "\n",
      "Average:" + findAverage(arrayOfInt),
      "\n",
      "Median: " + findMedian(arrayOfInt),
      "\n",
      "Mode: " + findMode(arrayOfInt)
    );
  };

  const findLength = (arr) => {
    return arr.length;
  };

  const findAverage = (arr) => {
    return arr.reduce((a, b) => Number(a) + Number(b)) / arr.length;
  };

  const findMedian = (arr) => {
    if (arr.length % 2 === 0) {
      const first = arr[arr.length / 2 - 1];
      const second = arr[arr.length / 2];
      return (first + second) / 2;
    } else {
      const mid = Math.floor(arr.length / 2);
      return arr[mid];
    }
  };

  const findMode = (arr) => {
    const obj = {};
    arr.forEach((number) => {
      if (!obj[number]) {
        obj[number] = 1;
      } else {
        obj[number] += 1;
      }
    });
    let highestValue = 0;
    let highestValueKey = -Infinity;

    for (let key in obj) {
      const value = obj[key];
      if (value >= highestValue && Number(key) > highestValueKey) {
        highestValue = value;
        highestValueKey = Number(key);
      }
    }
    return highestValueKey;
  };

  return (
    <form
      onSubmit={(e) => {
        onSendClicked(e);
      }}
    >
      <div className="card-footer bg-white p-4">
        <div>
          <input
            variant="outlined"
            margin="dense"
            name="input"
            value={inputString}
            onChange={(e) => setInputString(e.target.value)}
            placeholder="Input numbers"
          />
        </div>
        <div className="align-box-row mt-3">
          <div className="ml-auto">
            <button
              type="submit"
              size="small"
              variant="contained"
              color="primary"
              disabled={!inputString}
              onClick={(e) => {
                onSendClicked(e);
              }}
            >
              Convert to Integer Array
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ConvertStrToIntArr;
