import React from "react";
import Edms from "../assets/edms.png";
import Pertashop from "../assets/pertashop.png";
import Netta from "../assets/netta.png";
import Evote from "../assets/evote.png";
import Harwat from "../assets/harwat.png";
import EnergyMeter from "../assets/energymeter.png";
const ProjectCard = () => {
  return (
    <div className="w-full  py-16 px-16 mx-auto flex flex-col justify-center items-center" id="project">
      <h3 class="text-2xl text-[#31E1F7] font-bold mb-10 -ml-3">
        Featured Project ____
      </h3>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="card w-96 h-[550px] glass">
          <figure>
            <img src={Edms} alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">EDMS</h2>
            <p>Aplikasi Sistem Marketing Manajemen Digital PT. Ethos</p>
          </div>
        </div>
        <div className="card w-96 glass">
          <figure>
            <img src={Netta} alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Netta</h2>
            <p>Attending Assistant berbasis mobile dan web</p>
          </div>
        </div>
        <div className="card w-96 glass">
          <figure>
            <img src={Evote} alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Evote</h2>
            <p>Aplikasi untuk perumahan Buah Batu Regency</p>
          </div>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 mt-4">
        <div className="card w-96 glass">
          <figure>
            <img src={Pertashop} alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Pertashop</h2>
            <p>Aplikasi maintenance dan registrasi Pertashop</p>
          </div>
        </div>
        <div className="card w-96 glass">
          <figure>
            <img src={Harwat} alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Harwat TNI AD</h2>
            <p>Aplikasi sistem informasi TNI AD</p>
          </div>
        </div>
        <div className="card w-96 glass">
          <figure>
            <img src={EnergyMeter} alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Energy Meter</h2>
            <p>Aplikasi sistem monitoring energi RSCM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
