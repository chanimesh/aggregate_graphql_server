module.exports = {
  Query: {
    universities: async (_, __, { dataSources }) =>{
      const brazilUniv = await dataSources.UniversitiesAPI.getUniversitiesOfBrazil();
      const indiaUniv = await dataSources.UniversitiesAPI.getUniversitiesOfIndia();
      const spacexData = await dataSources.LaunchAPI.getAllLaunches();
      return [...spacexData, ...brazilUniv, ...indiaUniv]
    },
  },
};
