import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



const launchStatuses = [
	{
		key: "Past 6 months",
		text: "Past 6 months",
		value: "6",
	},
	{
		key: "Past 3 months",
		text: "Past 3 months",
		value: '3',
	},
	{
		key: "Past 1 months",
		text: "Past 1 months",
		value: '1',
	},
];

function FilterByDate({ startDate, endDate, setStartDate, setEndDate }) {
	//setEndDate = new Date();
	return (
		<div className="date-filter">
			<div className="text-align-center date-box">
				<p className="filter-name-label ">Start Date</p>
				<DatePicker
					selected={startDate}
					selectsStart
					isClearable
					dateFormat="yyyy/MM/dd"
					showYearDropdown
					showMonthDropdown
					onChange={(date) => setStartDate(date)}
					placeholderText="Start Date"
				/>
		{/* <DatePicker className="Datepicker"
		selected={startDate}
		placeholderText="Date"
		onChange={(date) => setStartDate(date)}
		monthsShown={2}
		
	  /> */}
			</div>
			<div className="text-align-center date-box">
				<p className="filter-name-label">End Date</p>
				<DatePicker
					selected={endDate}
					selectsStart
					isClearable
					dateFormat="yyyy/MM/dd"
					showYearDropdown
					showMonthDropdown
					onChange={(date) => setEndDate(date)}
					placeholderText="End Date"
				/>
			</div>
		</div>
	);
}

export default FilterByDate;
