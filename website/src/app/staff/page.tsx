"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PageHeader from "@/components/shared/PageHeader";
import StaffCard from "@/components/cards/StaffCard";
import { staff, departments } from "@/data/staff";

export default function StaffPage() {
  const [activeDept, setActiveDept] = useState("All");

  const filtered =
    activeDept === "All"
      ? staff
      : staff.filter((m) => m.department === activeDept);

  return (
    <>
      <PageHeader
        title="Our Team"
        description="Meet the researchers, scientists, and staff who drive discovery at Byurakan Observatory."
      />

      <section className="py-14 pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          {/* Department filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setActiveDept(dept)}
                className={`px-4 py-2 rounded-full text-[13px] font-medium tracking-wide transition-all duration-200 ${
                  activeDept === dept
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Staff grid */}
          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {filtered.map((member, index) => (
              <StaffCard key={member.id} member={member} index={index} />
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-16">
              No staff members found in this department.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
