import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getLeads, deleteLead } from "../actions/leads";

const Leads = () => {
  const dispatch = useDispatch();
  const leads = useSelector((state) => state.leads.leads);

  useEffect(() => {
    dispatch(getLeads());
  }, [dispatch]);

  return (
    <>
      <h2>Leads</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {leads?.map((lead) => (
            <tr key={lead.id}>
              <td>{lead.id}</td>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.message}</td>
              <td>
                <button onClick={() => dispatch(deleteLead(lead.id))}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Leads;
