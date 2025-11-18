"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGlobe,
  FaTransgender,
  FaBirthdayCake,
  FaBook,
  FaShieldAlt,
} from "react-icons/fa";

const Profile = ({ user }) => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <InfoCard icon={<FaEnvelope />} label="Email" value={user.email} />
      <InfoCard
        icon={<FaPhone />}
        label="Phone"
        value={user.phone || "Not Added"}
      />
      <InfoCard
        icon={<FaMapMarkerAlt />}
        label="Address"
        value={user.address || "Not Added"}
      />
      <InfoCard
        icon={<FaGlobe />}
        label="Nationality"
        value={user.nationality || "Not Provided"}
      />
      <InfoCard
        icon={<FaTransgender />}
        label="Gender"
        value={user.gender || "Not Provided"}
      />
      <InfoCard
        icon={<FaBirthdayCake />}
        label="Birth Date"
        value={user.birth || "Not Provided"}
      />
      <InfoCard
        icon={<FaBook />}
        label="Education"
        value={user.education || "Not Provided"}
      />
      <InfoCard icon={<FaShieldAlt />} label="Role" value={user.role} />
    </motion.div>
  );
};

export default Profile;

/* ========== Reusable Info Card Component ========== */
function InfoCard({ icon, label, value }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="p-4 bg-accent rounded-xl shadow text-secondary hover:shadow-primary cursor-pointer border border-primary/10"
    >
      <div className="flex items-center gap-3 mb-1">
        <span className="text-primary text-xl">{icon}</span>
        <h3 className="font-semibold text-secondary text-lg">{label}</h3>
      </div>
      <p className="text-secondary font-medium">{value}</p>
    </motion.div>
  );
}
