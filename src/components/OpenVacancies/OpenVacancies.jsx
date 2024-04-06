import { filedata } from "./jobs";
import { useRef, useState } from "react";
import useGsapHook from "../../hooks/useGsapHook.js";
import { Modal, TextField, Button, Typography, Box } from "@mui/material";

const OpenVacancies = ({ isAdmin }) => {
  const section = useRef();
  const [jobs, setJobs] = useState(filedata);
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState("");
  const { useGSAP, gsap } = useGsapHook();
  useGSAP(
    () => {
      gsap.fromTo(
        ".section_heading",
        { opacity: 0, scale: 0.8, x: "-100%" },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 1,
          ease: "back(0.5)",
          scrollTrigger: section.current,
        }
      );
    },

    { scope: section }
  );
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  const handleDelete = (id) => {
    setJobs((e) => {
      const newState = e.filter((e) => e.id != id);
      return newState;
    });
  };

  const handleEdit = (id) => {
    setShow(true);
    const data = jobs.filter((e) => e.id == id)[0];
    setModalData(data);
  };
  const handleClose = () => setShow(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const descList = data.desc.split(";");
    data.desc = descList;
    if (!modalData) {
      // new element to be added
      data.id = Math.random() * 100;
      setJobs((e) => [data, ...e]);
      setShow(false);
      return;
    }
    const newJobs = jobs.filter((e) => e.id != modalData.id);
    setJobs([...newJobs, data]);
    setShow(false);
  };

  const EditForm = () => {
    const [formData, setFormData] = useState({
      title: modalData?.title || "",
      desc: modalData?.desc || "",
    });
    return (
      <form
        onSubmit={(e) => handleSubmit(e)}
        className=" bg-white rounded h-fit  my-auto p-5 flex flex-col gap-5"
      >
        <Typography variant="h5" component="h2">
          {modalData ? "Edit Form" : "Add new Job"}
        </Typography>
        <TextField
          type="text"
          label="Job Title"
          defaultValue={formData.title}
          name="title"
          onChange={(e) =>
            setFormData((state) => ({ ...state, title: e.target.value }))
          }
        />
        <TextField
          type="text"
          label="Job Description"
          name="desc"
          defaultValue={formData.desc}
          onChange={(e) =>
            setFormData((state) => ({ ...state, desc: e.target.value }))
          }
        />
        <p> Bullet points to be separated by ; (semicolon)</p>
        <Button
          variant="contained"
          type="submit"
          disabled={!(formData.title && formData.desc)}
        >
          Submit
        </Button>
      </form>
    );
  };

  return (
    <section ref={section} className="overflow-hidden">
      <h2 className="section_heading text-4xl font-bold mt-20 ps-10 ">
        Open vacancies
      </h2>
      {isAdmin ? (
        <button
          onClick={handleEdit}
          className="rounded-full bg-green-500 text-white py-3 px-4 text-sm my-5 mx-5 bottom-0 "
        >
          Add vacancies
        </button>
      ) : (
        <></>
      )}

      <div className="flex overflow-scroll no-scrollbar gap-8 py-5 my-5 min-h-80  ps-10 relative ">
        {jobs.map((job) => (
          <div
            key={job.id}
            style={isAdmin ? { height: "300px" } : {}}
            className="  bg-[#fefbec] rounded-3xl p-6 w-[360px]  h-[200px] hover:h-[250px] hover:bg-[#ffefd7] transition-all ease-linear duration-200 shrink-0 relative overflow-hidden group "
          >
            <p className="text-lg font-bold ">{job.title}</p>
            {isAdmin ? (
              <>
                <button
                  onClick={() => handleDelete(job.id)}
                  className="rounded-full bg-red-500   text-white py-3 px-4 text-sm mt-5  "
                >
                  delete
                </button>
                <button
                  onClick={() => handleEdit(job.id)}
                  className="rounded-full bg-blue-500 text-white py-3 px-4 text-sm mt-5 mx-3"
                >
                  edit
                </button>
              </>
            ) : (
              <></>
            )}
            <ul className="list-disc text-sm  gap-4  list-inside leading-8	font-medium">
              {job.desc.map((ele, i) => (
                <li key={i}>{ele}</li>
              ))}
            </ul>
            <button className="rounded-full bg-black text-white py-3 px-4 text-sm mt-5 bottom-0 invisible group-hover:visible transition-all duration-200 group-hover:opacity-100 opacity-0">
              See details
            </button>
          </div>
        ))}
      </div>
      <Modal open={show} onClose={handleClose}>
        <Box style={style}>
          <EditForm />
        </Box>
      </Modal>
    </section>
  );
};

export default OpenVacancies;
