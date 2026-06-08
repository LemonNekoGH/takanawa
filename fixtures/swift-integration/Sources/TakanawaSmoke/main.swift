import Takanawa

var config = TknwGlobalConfig()
config.abi_version = UInt32(TKNW_ABI_VERSION)
config.struct_size = MemoryLayout<TknwGlobalConfig>.stride
config.max_io = 1

_ = tknw_global_init(&config)
_ = tknw_global_shutdown()
