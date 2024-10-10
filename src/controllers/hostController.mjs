import Host from "../models/hostModel.mjs"; // Assuming the Host model is in Host.mjs

const getAllHosts= async(req, res) =>{
    try {
      const hosts = await Host.find();
      res.json(hosts);
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve hosts" });
    }
  }

  const getHostById = async(req, res) =>{
    try {
      const host = await Host.findById(req.params.id);
      if (!host) {
        return res.status(404).json({ error: "Host not found" });
      }
      res.json(host);
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve host" });
    }
  }

  const addHost = async(req, res) =>{
    try {
      const host = new Host(req.body);
      await host.save();
      res.json(host);
    } catch (error) {
      res.status(400).json({ error: "Invalid host data" });
    }
  }

  const updateHost = async(req, res) => {
    try {
      const host = await Host.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!host) {
        return res.status(404).json({ error: "Host not found" });
      }
      res.json(host);
    } catch (error) {
      res.status(400).json({ error: "Invalid host data" });
    }
  }

  const deleteHost = async(req, res) => {
    try {
      const deleteHost = await Host.findByIdAndDelete(req.params.id);
      if (!host) {
        return res.status(404).json({ error: "Host not found" });
      }
      res.json({ message: "Host deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete host" });
    }
  }


export {getAllHosts, getHostById, addHost, updateHost, deleteHost};
