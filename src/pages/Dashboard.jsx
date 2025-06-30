import React, { useState } from "react";
import profile from "../assets/profile.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import { MdOutlineModeEdit } from "react-icons/md";
import { CiFilter } from "react-icons/ci";
import { IoLinkSharp } from "react-icons/io5";
import { IoIosAdd } from "react-icons/io";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import sharePerson from "../assets/sharePerson.png";
import equalFill from "../assets/equalFill.png";
import menuGrid from "../assets/menuGrid.png";
import { PiEqualsFill } from "react-icons/pi";
import { CgMenuGridO } from "react-icons/cg";
import Todo from "../componenets/Todo";
import { useSelector } from "react-redux";

const Dashboard = ({ setTodoModal }) => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const [Filter, setFilter] = useState(null);
  const [date, setdate] = useState(dayjs());

  const handleChange = (event) => {
    setFilter(event.target.value);
  };
  return (
    <div
      className={`h-full ${
        isMenuOpen ? "hidden" : ""
      }  md:flex justify-center mt-8  item-center w-full`}
    >
      <div className=" w-[96%] mx-4 h-full flex  flex-col gap-5 justify-center items-center ">
        <div className="w-full  flex justify-between  pr-[60px] items-center">
          <div className="flex font-semibold  text-4xl  items-center justify-center gap-3">
            <h1 className="text-[32px] sm:text-[38px] md:text-[42px] lg:text-[46px]">
              Mobile-App
            </h1>
            <div className="size-[30px] p-1 bg-violet-200 cursor-pointer rounded-xl flex justify-center items-center">
              <MdOutlineModeEdit
                size={20}
                color="#5030E5"
                style={{ width: "30px", height: "20px" }}
              />
            </div>
            <div className="size-[30px] p-1 bg-violet-200 cursor-pointer rounded-xl flex justify-center items-center">
              <IoLinkSharp size={20} color="#5030E5" />
            </div>
          </div>

          <div className=" hidden md:flex justify-center items-center gap-2">
            <div className="bg-violet-200 cursor-pointer rounded-md">
              <IoIosAdd size={15} color="#5030E5" />
            </div>
            <p className="text-violet-600 cursor-pointer font-semibold">
              Invite{" "}
            </p>
            <div className="relative flex justify-center items-center pr-5">
              <img src={img1} alt="logo" className="   w-[30px] h-[30px]" />
              <img
                src={img2}
                alt="logo"
                className="  absolute left-5 z-10  w-[30px] h-[30px]"
              />
              <img
                src={img3}
                alt="logo"
                className=" absolute z-20 left-10  w-[30px] h-[30px]"
              />
              <img
                src={img4}
                alt="logo"
                className=" absolute z-30 left-16 w-[30px] h-[30px]"
              />
              <div className="flex justify-center absolute left-20 z-40 w-[30px] h-[30px] bg-red-300 items-center  rounded-2xl">
                <p className="text-xs">+2</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full  flex  justify-between  items-start">
          <div className="flex flex-col sm:flex-row justify-center sm:items-end gap-4">
            <FormControl
              sx={{
                m: 0,
                minWidth: 150,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#787486",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#1976d2",
                    // Adjust notch width to prevent label overlap
                    // borderTopWidth: "1px !important", // Ensures top border remains visible
                  },
                },
                // Label adjustments
                "& .MuiInputLabel-root": {
                  color: "#787486",
                  "&.Mui-focused": {
                    color: "#1976d2",
                    transform: "translate(14px, -9px) scale(0.75)", // Adjust position
                    backgroundColor: "white", // Add background to prevent border cut-off
                    padding: "0 4px", // Add padding for the background
                  },
                },
              }}
              size="small"
            >
              <InputLabel id="demo-select-small-label text-xs">
                <div className="flex items-center gap-2 ">
                  <CiFilter color="#787486" style={{ strokeWidth: "1.25px" }} />
                  Filter
                </div>
              </InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={Filter}
                label="Filter"
                onChange={handleChange}
              >
                <MenuItem value={null}>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"Low"}>Low</MenuItem>
                <MenuItem value={"High"}>High</MenuItem>
                <MenuItem value={"Completed"}>Completed</MenuItem>
              </Select>
            </FormControl>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  label="Date"
                  name="startDate"
                  defaultValue={dayjs()}
                  onChange={(newValue) => setdate(newValue)}
                  slotProps={{
                    textField: {
                      sx: {
                        width: "60px",
                        "& .MuiInputBase-root": {
                          height: "40px",
                          fontSize: "0.8rem",
                        },
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#787486", // Border color in default state
                          },
                        },
                      },
                      size: "small",
                    },
                  }}
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>

          <div className=" hidden md:flex justify-center items-center gap-4 ">
            <div className="flex justify-center items-center pr-5  border-r-[1px] border-r-[#787486]">
              <button className="p-2 px-3 rounded-md text-sm flex gap-1 border-[1px]  bg-pu border-[#787486] justify-center items-center">
                <img
                  src={sharePerson}
                  alt="Share Logo"
                  style={{ width: "18px", height: "16px", color: "#787486" }}
                />
                {/* <MdOutlinePersonAddAlt size={18} color="#787486" /> */}
                <p className="text-gray-600">Share</p>
              </button>
            </div>
            <img
              src={equalFill}
              alt="Equal Fill"
              style={{ width: "40px", height: "40px", color: "#5030E5" }}
            />
            <img
              src={menuGrid}
              alt="Menu Grid"
              style={{ width: "21px", height: "21px", color: "#787486" }}
            />
          </div>
        </div>
        <Todo setTodoModal={setTodoModal} Filter={Filter} />
      </div>
    </div>
  );
};

export default Dashboard;
