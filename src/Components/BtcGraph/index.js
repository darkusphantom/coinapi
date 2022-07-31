import React, { Fragment } from "react";
import { Line } from "react-chartjs-2";
import { useBarGraph } from "../../Hooks/useBarGraph";
import "./BtcGraph.css";

const BtcGraph = () => {
  const { stateGraph, updateGraph } = useBarGraph();
  const { dataGraph, options, loading: isLoading, update } = stateGraph;
  const { handleUpdateData: handleUpdate } = updateGraph;

  return (
    <Fragment>
      <header className="btc-graph-header">
        <h2 className="btc-graph-title"> BTC GRAPH</h2>
        {update && <p>Updated</p>}
        <button type="button" className="btn-update" onClick={handleUpdate}>
          Update
        </button>
      </header>
      {!isLoading && <Line data={dataGraph} options={options} />}
    </Fragment>
  );
};

export { BtcGraph };
