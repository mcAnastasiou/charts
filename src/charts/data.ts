type DataLineType = {
  label: string;
  value: number;
};

type DatasetLineType = {
  label: string;
  data: DataLineType[];
};

export const datasetsLine: DatasetLineType[] = [
  {
    label: "Dataset 1",
    data: [
      {
        label: "January",
        value: 65,
      },
      {
        label: "February",
        value: 59,
      },
      {
        label: "March",
        value: 80,
      },
      {
        label: "April",
        value: 81,
      },
      {
        label: "May",
        value: 56,
      },
      {
        label: "June",
        value: 55,
      },
      {
        label: "July",
        value: 40,
      },
    ],
  },
  {
    label: "Dataset 2",
    data: [
      {
        label: "January",
        value: 28,
      },
      {
        label: "February",
        value: 48,
      },
      {
        label: "March",
        value: 40,
      },
      {
        label: "April",
        value: 19,
      },
      {
        label: "May",
        value: 86,
      },
      {
        label: "June",
        value: 27,
      },
      {
        label: "July",
        value: 90,
      },
    ],
  },
];
