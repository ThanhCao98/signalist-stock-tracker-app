const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI;

const testDatabaseConnection = async () => {
    console.log("🔄 Testing database connection...\n");

    if (!MONGODB_URI) {
        console.error("❌ Error: MONGODB_URI is not defined in .env file");
        process.exit(1);
    }

    console.log("✓ MONGODB_URI found");
    console.log(`  URI: ${MONGODB_URI.replace(/:[^:]*@/, ":***@")}\n`); // Hide password

    try {
        console.log("📡 Connecting to MongoDB...");
        const startTime = Date.now();

        const conn = await mongoose.connect(MONGODB_URI, {
            bufferCommands: false,
        });

        const endTime = Date.now();
        const connectionTime = endTime - startTime;

        console.log("✓ Connected successfully!");
        console.log(`  Connection time: ${connectionTime}ms\n`);

        // Get database info
        const dbName = conn.connection.name;
        const dbHost = conn.connection.host;
        const dbPort = conn.connection.port;

        console.log("📊 Database Information:");
        console.log(`  Database: ${dbName}`);
        console.log(`  Host: ${dbHost}`);
        console.log(`  Port: ${dbPort}`);
        console.log(`  State: ${conn.connection.readyState === 1 ? "Connected" : "Disconnected"}\n`);

        // Test a simple operation
        console.log("🧪 Running test query...");
        const collections = await conn.connection.db?.listCollections().toArray();
        console.log(`  Collections found: ${collections?.length || 0}`);
        if (collections && collections.length > 0) {
            console.log("  Collections:");
            collections.forEach((col) => {
                console.log(`    - ${col.name}`);
            });
        }

        console.log("\n✅ Database connection test passed!");

        await mongoose.connection.close();
        console.log("✓ Connection closed");
        process.exit(0);
    } catch (error) {
        console.error(
            "❌ Connection failed:",
            error instanceof Error ? error.message : String(error)
        );
        process.exit(1);
    }
};

testDatabaseConnection();
