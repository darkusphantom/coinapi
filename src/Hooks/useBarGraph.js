import { useMemo, useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useBtcGraph } from "./useBtcGraph";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  fill: true,
  responsive: true,
  scales: {
    y: {
      min: 0,
    },
  },
};

const useBarGraph = () => {
  const [scoreUp, setScoreUp] = useState([]);
  const [labelState, setLabelState] = useState([]);
  const [update, setUpdate] = useState(false);
  const { item, loading, sincronizeItem } = useBtcGraph({});

  useEffect(() => {
    setTimeout(() => {
      if (!loading) {
        setDataGraph(item.data);
        setLabelGraph(item.data);
      }
    }, 3000);
  }, [sincronizeItem]);

  const dataGraph = useMemo(() => {
    const setColor = (context) => {
      if (context.type === "segment") {
        return context.p0.y < context.p1.y
          ? "rgba(234,57,67)"
          : "rgba(22,199,132,1)";
      }
    };
    return {
      labels: labelState,
      datasets: [
        {
          label: "price",
          data: scoreUp,
          tension: 0.3,
          //pointRadius: 6,
          //borderColor: "rgba(234,57,67)"
          //backgroundColor: "rgba(22,199,132,.5)",
          //pointBackgroundColor: "rgba(22,199,132,.5)",
          segment: {
            borderColor: (context) => setColor(context),
            backgroundColor: (context) => setColor(context),
          },
        },
      ],
    };
  }, [scoreUp]);

  const setDataGraph = (data) => {
    try {
      const prices = data.map((element) => element.priceUsd);
      setScoreUp(prices);
    } catch (error) {
      console.error(error);
    }
  };

  const setLabelGraph = (data) => {
    const transformYear = (time) => {
      const newTime = new Date(time);
      return newTime.getFullYear();
    };
    try {
      const label = data.map((element) => transformYear(element.time));
      setLabelState(label);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateData = () => {
    if (!loading) {
      if (!update) {
        setDataGraph(item.data);
        setLabelGraph(item.data);
        setUpdate(true);
        setTimeout(() => setUpdate(false), 2000);
      }
    }
  };

  const stateGraph = {
    dataGraph,
    options,
    loading,
    update,
  };

  const updateGraph = { setDataGraph, setLabelGraph, handleUpdateData };

  return { stateGraph, updateGraph };
};

export { useBarGraph };
